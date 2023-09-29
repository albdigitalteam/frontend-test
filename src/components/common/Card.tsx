import { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
    return (
        <div
            className="flex flex-col gap-2 mt-4 w-full rounded-xl overflow-hidden 
            text-gray-700 bg-white p-4 shadow-lg ring-2 ring-secondary/10"
        >
            {children}
        </div>
    );
}

export default Card;
