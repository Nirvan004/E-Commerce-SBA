export declare class CustomError extends Error {
    readonly type: string;
    readonly originalError?: unknown;
    constructor(message: string, type?: string, originalError?: unknown);
}
export declare class ErrorHandler {
    static handle(error: unknown): void;
    static apiError(message: string, originalError?: unknown): CustomError;
    static validationError(message: string): CustomError;
}
//# sourceMappingURL=errorHandler.d.ts.map