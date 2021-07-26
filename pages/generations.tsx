import AppHead from "../src/components/Head";
import Header from "../src/patterns/Header";
import MainGenerations from "../src/patterns/MainGenerations";


export default function Generations(){
    return(
        <>
            <AppHead title="Pokemon generation" />
            <Header />
            <MainGenerations />
        </>
    )
}