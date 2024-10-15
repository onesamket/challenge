import { Mic, Search } from "lucide-react"

type SearchBarProps = {
    placeholder?: string
    onSearch: (query: string) => void
}

export function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
    return (
        <div className="w-full bg-[#262b2f] max-w-sm mx-auto rounded-xl shadow-sm p-2">
            <div className="relative flex items-center">
                <Search className="absolute left-3 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-2 bg-[#262b2f] rounded-xl focus:outline-none text-sm text-white"
                    onChange={(e) => onSearch(e.target.value)}
                />
                <div className='absolute right-3 flex items-center space-x-1'>
                    <p className='text-gray-400/35'>|</p>
                    <Mic className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </div>
    )
}