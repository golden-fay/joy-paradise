"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";

export function AuthModal({
  titleId,
  title,
  onClose,
  children,
}: {
  titleId: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!isMounted) return null;

  // Rendered into document.body so the header's backdrop-blur can't turn this
  // fixed overlay into a dropdown anchored to the nav (backdrop-filter creates
  // a new containing block for fixed-position descendants).
  return createPortal(
    <div
      className="animate-modal-overlay-in fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/60 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="animate-modal-panel-in relative max-h-[90vh] w-full max-w-[26rem] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-navy-800/60 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
        >
          <CloseIcon className="size-5" />
        </button>
        <h2 id={titleId} className="font-display text-2xl font-semibold text-navy-950">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
