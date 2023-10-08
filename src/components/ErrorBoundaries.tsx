    // mostly code from reactjs.org/docs/error-boundaries.html
    import { Component, ReactNode, ErrorInfo } from "react";
    import { Link } from "react-router-dom";
import { Button } from "./ui/button";

    interface State {
    hasError: boolean;
    }

    interface Props {
    children: ReactNode;
    }

    class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(error: Error): State {
        console.error("Get derived state from error", error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render(): ReactNode {
        if (this.state.hasError) {
        return (
            <div className="flex justify-center items-center bg-slate-500">
                <h1 className="text-center text-red-700">
            Oups! A error happen , you should back to the home page*
            </h1>
            <Button><Link to='/'>Home</Link></Button>
            </div>
            
        );
        }

        return this.props.children;
    }
    }

    export default ErrorBoundary;
