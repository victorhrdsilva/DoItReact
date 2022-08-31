import Footer from "./Footer";
import Header from "./Header";


export default function PrivatePage({ children }) {
    const token = localStorage.getItem("happenToken");

    
    if (token) {
        return (
          <>
            <Header />
            {children}
            <Footer />
          </>
        );
}else{
  return <h1>Carregando</h1>
}
}