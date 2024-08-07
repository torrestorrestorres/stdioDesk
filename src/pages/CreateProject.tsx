import React from "react";

export default function CreateProject() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-2 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <div className="w-full max-w-md p-8 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-[var(--radius)] shadow-md">
                <h1 className="text-2xl font-bold mb-4">Create Project</h1>
                <div className="mb-4">
                    <label htmlFor="projectName" className="font-bold">
                        Project Name:
                    </label>
                    <input
                        id="projectName"
                        type="text"
                        className="block w-full mt-1 p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] bg-[hsl(var(--input))] text-[hsl(var(--foreground))]"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="frameworkSelection" className="font-bold">
                        Framework Selection:
                    </label>
                    <select
                        id="frameworkSelection"
                        className="block w-full mt-1 p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] bg-[hsl(var(--input))] text-[hsl(var(--foreground))]"
                    >
                        <option value="none">None</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                <button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-foreground))] text-[hsl(var(--primary-foreground))] font-bold py-2 px-4 rounded-[var(--radius)]">
                    Create Project
                </button>
            </div>
        </div>
    );
}