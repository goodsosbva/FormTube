import { Suspense } from "react";
import {CategoriesSection} from "@/modules/home/ui/sections/category-section";

interface HomeViewProps {
    categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
    return (
        <div className="max-w-[2400px] mx-auto mb-0 px-4 pt-2.5 flex flex-col gap-y-6 border-w-0">
            <CategoriesSection categoryId={categoryId} />
        </div>
    );
};
