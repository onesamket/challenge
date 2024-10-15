// import { ToastAction } from "@/components/ui/toast";
// import { toast } from "@/components/ui/use-toast";
// import { AxiosError } from "axios";
// import { CheckCircle } from "lucide-react";

// type ErrorType = 'delete' | 'fetch' | 'update' | 'create';
// type SuccessType = 'create' | 'update' | 'delete';

// function getErrorMessage(error: unknown): string {
//     if (error instanceof AxiosError) {
//         return error.response?.data.message || error.message;
//     }
//     return "An unexpected error occurred.";
// }

// export function handleError(error: unknown, type: ErrorType) {
//     const message = getErrorMessage(error);
//     let title = "Uh oh! Something went wrong.";

//     switch (type) {
//         case 'delete':
//             title = "Delete Error";
//             break;
//         case 'fetch':
//             title = "Fetch Error";
//             break;
//         case 'update':
//             title = "Update Error";
//             break;
//         case 'create':
//             title = "Creation Error";
//             break;
//         default:
//             title = "Error";
//     }

//     toast({
//         variant: "destructive",
//         title,
//         description: `Unable to complete the operation: ${message}`,
//         action: <ToastAction altText="Try again">Try again</ToastAction>,
//     });
// }

// export function handleSuccess(message: string, type: SuccessType) {
//     let title = "Success";
//     let icon = <CheckCircle className="h-4 w-4 text-green-500" />;

//     switch (type) {
//         case 'create':
//             title = "Creation Successful";
//             break;
//         case 'update':
//             title = "Update Successful";
//             break;
//         case 'delete':
//             title = "Deletion Successful";
//             break;
//         default:
//             title = "Success";
//     }

//     toast({
//         variant: "default",
//         title,
//         description: message,
//     });
// }
