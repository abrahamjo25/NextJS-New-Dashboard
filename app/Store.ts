import { create } from "zustand"

type pageOptions = 'DASHBOARD' | 'INTEGRATIONS' | 'SETTINGS' | 'CALENDAR' | 'TIMEOFF' | 'PROJECTS' | 'TEAMS' | 'BENEFITS' | 'DOCUMENTS' | 'SUPPORT'

interface centralStore {
    activePage: pageOptions
    setActivePage: (page: pageOptions) => void

    isSidebarOpen: boolean
    toggleSidebar: () => void
    setIsSidebarOpen: (isOpen: boolean) => void

    accessToken: string | null
    setAccessToken: (token: string) => void
    initializeAccessToken: () => void
}

export const useCentralStore = create<centralStore>((set, get) => ({
    activePage: 'DASHBOARD',
    setActivePage: (page) => set({ activePage: page }),

    isSidebarOpen: false,
    toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),
    setIsSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),

    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    initializeAccessToken: () => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1") || null
        set({ accessToken: token })
    }
}))
