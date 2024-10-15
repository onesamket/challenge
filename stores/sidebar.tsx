import { create } from "zustand";

interface SidebarState {
    isOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

export const SidebarStore = create<SidebarState>((set) => ({
    isOpen: true,
    toggleSidebar: () =>
        set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
    closeSidebar: () => set({ isOpen: false }),
    openSidebar: () => set({ isOpen: true }),
}));
