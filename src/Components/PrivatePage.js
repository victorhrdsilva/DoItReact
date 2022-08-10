import Header from "./Header";

export default function PrivatePage({ children }) {
    const token = false
    if (token) {
        return (
          <>
            <Header />
            {children}
          </>
        );
}}