import { ReactNode } from "react";

export const rawHTMLDefaults = {
    p: (chunks: ReactNode): ReactNode => <p>{chunks}</p>,
    strong: (chunks: ReactNode): ReactNode => <strong>{chunks}</strong>,
}