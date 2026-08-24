import { create } from "zustand";
import { CUTS } from "@/data/portfolio";

type PlayerState = {
  id: string | null;
  queue: string[];
  playing: boolean;
  muted: boolean;
  open: (id: string, queue?: string[]) => void;
  close: () => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  setMuted: (muted: boolean) => void;
};

function neighbor(id: string | null, queue: string[], dir: 1 | -1) {
  if (!queue.length) return id;
  const current = id ?? queue[0];
  const i = Math.max(0, queue.indexOf(current));
  const next = (i + dir + queue.length) % queue.length;
  return queue[next] ?? current;
}

export const usePlayer = create<PlayerState>((set, get) => ({
  id: null,
  queue: CUTS.map((c) => c.id),
  playing: true,
  muted: true,
  open: (id, queue) =>
    set({
      id,
      queue: queue && queue.length ? queue : CUTS.map((c) => c.id),
      playing: true,
    }),
  close: () => set({ id: null, playing: false }),
  toggle: () => set({ playing: !get().playing }),
  next: () => {
    const { id, queue } = get();
    set({ id: neighbor(id, queue, 1), playing: true });
  },
  prev: () => {
    const { id, queue } = get();
    set({ id: neighbor(id, queue, -1), playing: true });
  },
  setMuted: (muted) => set({ muted }),
}));
