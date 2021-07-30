import AppHead from "../src/components/Head"
import Header from "../src/patterns/Header"
import MainHome from "../src/patterns/MainHome"

export default function Home(){
    return (
    <div>
        <AppHead title="Home" />
        <Header />
        <MainHome />
    </div>)
}