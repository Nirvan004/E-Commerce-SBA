export class CustomError extends Error {
    type;
    originalError;
    constructor(message, type = "GENERAL_ERROR", originalError) {
        super(message);
        this.name = "CustomError";
        this.type = type;
        this.originalError = originalError;
    }
}
export class ErrorHandler {
    static handle(error) {
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
    static apiError(message, originalError) {
        return new CustomError(message, "API_ERROR", originalError);
    }
    static validationError(message) {
        return new CustomError(message, "VALIDATION_ERROR");
    }
}
//# sourceMappingURL=errorHandler.js.map