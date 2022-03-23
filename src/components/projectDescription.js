import Modal from "./modal/modal"

const chapters = "throughout different chapters this platform will coin topics that are related to the programming of the museum. " +
    "chapter 1: good design is often related with the aesthetically pleasing. A first chapter approaches the collection from a sensorial perspective."

const ProjectDescription = () => {

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div className="infoBoxLeft">
            <h1 className="underlined" style={{fontSize: "20px"}}>___PROJECT DESCRIPTION</h1>
            <p style={{fontSize: "15px"}}>MODELS FROM THE PAST FOR THE FUTURE is a site for speculative knowledge production
                that is both reflective and performative in investigating and embracing the (as yet) unknown. It situates itself
                in between where we are now and where we are going next. <ul> As an
                    <Modal modalID="modal2" modalLineID="modal2Line" text=" evolving platform" description={chapters}></Modal>, it seeks out alternative approaches and readings of the collection of Design museum Gent.</ul>
                <ul>As a <bold className="underlined">living archive</bold>, it will grow and serve as a sensing layer for past, current and future research practices.</ul>
                If anything, it moves and shies away from classical approaches of indexing and traditional ways of opening up museum collections online.
                Although it takes the collection database as a starting point, it aims at remedying the wretch and clutch of its methodologies. By avoiding search bars and
                complex query interfaces we are looking into the capabilities and opportunities of the "generous interface", a user experience built around the idea of the encounter.
                <br/>

                <h1><italic>__pull. transmit. fall in love, and break up again.</italic></h1>

                <br/> The <Modal modalID="modal1" modalLineID="modal1Line" text="XENO-MORPHIC" description="Meillisoux argues that one can only approach the contingent
                nature of the world, which he calls 'hyperchaos', by creating a toolbox in which constant change could manifest itself.
                As a research platform, we aim to demonstrate the changing nature of museum collections by evoking the fictions
                in which these changes occur. Whether by being part of the exhibition or the lack thereof..."></Modal>, the SENSORIAL & SENSIBLE, the TRANSHISTORICAL, the CURRENT and PAST-FUTURE are all ideologies
                and strategies that propel us in devising new kinds of interfaces that are perhaps more sensible to its users,
                more conscious of its surroundings and above all - foster inspiration.

                <br/>

                <h1>__break, mutate and build upon what is real and what isn't real.
                </h1>


            </p>
        </div>
    )
}

export default ProjectDescription;