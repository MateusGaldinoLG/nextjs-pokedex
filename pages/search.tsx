import AppHead from "../src/components/Head"
import Header from "../src/patterns/Header"
import MainSearch from "../src/patterns/MainSearch"

export default function Home(){
    return (
    <div>
        <AppHead title="Search" />
        <Header />
        <MainSearch />
    </div>)
}