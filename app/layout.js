import Header from "@/components/Header";
import "./css/globals.css";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  );
};

export default RootLayout;
