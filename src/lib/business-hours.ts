// Business hours logic for ProComputing (SAST / UTC+2, no DST)
// Mon–Fri 08:00–17:00, Sat 08:00–12:00, Sun closed, public holidays closed.

const FIXED_HOLIDAYS: Array<[number, number]> = [
  [1, 1], // New Year's Day
  [3, 21], // Human Rights Day
  [4, 27], // Freedom Day
  [5, 1], // Workers' Day
  [6, 16], // Youth Day
  [8, 9], // National Women's Day
  [9, 24], // Heritage Day
  [12, 16], // Day of Reconciliation
  [12, 25], // Christmas Day
  [12, 26], // Day of Goodwill
];

export type SastParts = {
  year: number;
  month: number; // 1-12
  day: number;
  weekday: number; // 0 = Sunday
  minutes: number; // minutes since midnight
};

export function getSastParts(date: Date = new Date()): SastParts {
  // SAST is a fixed UTC+2 offset year-round.
  const t = new Date(date.getTime() + 2 * 60 * 60 * 1000);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    weekday: t.getUTCDay(),
    minutes: t.getUTCHours() * 60 + t.getUTCMinutes(),
  };
}

function weekdayOf(year: number, month: number, day: number) {
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

/** A SA public holiday falling on a Sunday is observed the following Monday. */
export function isPublicHoliday(p: Pick<SastParts, "year" | "month" | "day">) {
  const direct = FIXED_HOLIDAYS.some(([m, d]) => m === p.month && d === p.day);
  if (direct) return true;
  // observed Monday for a Sunday holiday
  const prev = new Date(Date.UTC(p.year, p.month - 1, p.day - 1));
  const prevIsHoliday = FIXED_HOLIDAYS.some(
    ([m, d]) => m === prev.getUTCMonth() + 1 && d === prev.getUTCDate(),
  );
  return prevIsHoliday && prev.getUTCDay() === 0 && weekdayOf(p.year, p.month, p.day) === 1;
}

const SCHEDULE: Record<number, { open: number; close: number } | null> = {
  0: null, // Sunday
  1: { open: 8 * 60, close: 17 * 60 },
  2: { open: 8 * 60, close: 17 * 60 },
  3: { open: 8 * 60, close: 17 * 60 },
  4: { open: 8 * 60, close: 17 * 60 },
  5: { open: 8 * 60, close: 17 * 60 },
  6: { open: 8 * 60, close: 12 * 60 }, // Saturday
};

export type BusinessStatus = {
  isOpen: boolean;
  label: string;
  detail: string;
};

export function getBusinessStatus(date: Date = new Date()): BusinessStatus {
  const p = getSastParts(date);
  const holiday = isPublicHoliday(p);
  const hours = SCHEDULE[p.weekday] ?? null;

  if (holiday) {
    return { isOpen: false, label: "Closed Today", detail: "Public holiday" };
  }
  if (!hours) {
    return { isOpen: false, label: "Closed Today", detail: "Opens Monday 8:00 AM SAST" };
  }
  if (p.minutes < hours.open) {
    return {
      isOpen: false,
      label: "Closed Now",
      detail: "Opens 8:00 AM SAST",
    };
  }
  if (p.minutes >= hours.close) {
    return { isOpen: false, label: "Closed Now", detail: `Closed ${fmt(hours.close)} SAST` };
  }
  return { isOpen: true, label: "Open Today", detail: `Closes ${fmt(hours.close)} SAST` };
}

function fmt(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (minutes === 12 * 60) return "12:00 Noon";
  const suffix = h >= 12 ? "PM" : "AM";
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, "0")} ${suffix}`;
}
