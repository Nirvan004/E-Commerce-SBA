export class CustomError extends Error {
    public readonly type: string;
    public readonly originalError?: unknown;

    constructor(message: string, type = "GENERAL_ERROR", originalError?: unknown) {
        super(message);
        this.name = "CustomError";
        this.type = type;
        this.originalError = originalError;
    }
}

export class ErrorHandler {
    static handle(error: unknown): void {
        if (error instanceof CustomError) {
            console.error(`\n❌ [${error.type}] ${error.message}`);
            if (error.originalError) {
                console.error("Original error:", error.originalError);
            }
        } 
        else if (error instanceof Error) {
            console.error(`\n❌ [UNEXPECTED_ERROR] ${error.message}`);
        } 
        else {
            console.error(`\n❌ [UNKNOWN_ERROR]`, error);
        }
    }

    static apiError(message: string, originalError?: unknown): CustomError {
        return new CustomError(message, "API_ERROR", originalError);
    }

    static validationError(message: string): CustomError {
        return new CustomError(message, "VALIDATION_ERROR");
    }
}