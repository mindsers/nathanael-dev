import { ReactNode } from "react";

export const rawHTMLDefaults = {
    p: (chunks: ReactNode): ReactNode => <p>{chunks}</p>,
    strong: (chunks: ReactNode): ReactNode => <strong>{chunks}</strong>,
    h4: (chunks: ReactNode): ReactNode => <h4>{chunks}</h4>,
    ul: (chunks: ReactNode): ReactNode => <ul>{chunks}</ul>,
    li: (chunks: ReactNode): ReactNode => <li>{chunks}</li>,
}