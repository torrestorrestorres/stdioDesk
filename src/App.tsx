import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import CreateProject from "./pages/CreateProject";
import BaseLayout from "./layouts/BaseLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import "./localization/i18n";
import { updateAppLanguage } from "./helpers/language_helpers";

export default function App() {
    const { i18n } = useTranslation();
    const [currentPage, setCurrentPage] = useState("home");

    useEffect(() => {
        syncThemeWithLocal();
        updateAppLanguage(i18n);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case "create-project":
                return <CreateProject />;
            case "home":
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <BaseLayout>
            {renderPage()}
        </BaseLayout>
    );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);