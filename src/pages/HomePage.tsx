import React from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";
import { Button } from "@/components/ui/button";

export default function HomePage({ onNavigate }) {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        onNavigate("create-project");
    };

    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center gap-2">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <LangToggle />
                <ToggleTheme />
                <Button onClick={handleButtonClick}>{t("homeButton")}</Button>
            </div>
        </>
    );
}