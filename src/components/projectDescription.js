import Modal from "./modal/modal"
import React, {useState} from "react"
import object_colors from "../data/objectsColor_10.json";

const chapters = "MODELS FROM THE PAST FOR THE FUTURE, as a site for post-digital discourse, serves as a counter-proposal " +
    "to the accelerated pace of cultural production in museums today. This has created a dichotomy between the need to " +
    "create new experiences to increase our marketability within the experience economy, versus our role as care-giving " +
    "institutions. By taking the time to explore different ways of approaching a museum collection (digitally), " +
    "this project can be read as both a critical enquiry into the way collections are displayed, and a curatorial exercise " +
    "in creating a space in which to negotiate alternative modes of knowledge production and dissemination that might " +
    "make more sense on a planetary scale in terms of our environment."

const xenomorphic = "Meillisoux argues that one can only approach the contingent " +
    "nature of the world, which he calls 'hyperchaos', by creating a toolbox in which constant change could manifest itself." +
    "As a research platform, we aim to demonstrate the changing nature of museum collections by evoking the fictions, narratives and frameworks " +
    "in which these changes occur. Whether by being part of the exhibition or the lack thereof..."

const reflective = "MODELS FROM THE PAST OF THE FUTURE reflects on the concept and notion of model(s) in relationship to the museum today." +
    " How does a model museum behave? Looking back at our past we find that the museum in its earliest form was a museum of models (modellenmuseum), " +
    "a place that displayed 'good forms of design and craftmanship', in which the museum had a very specific social function to inspire and inform local craftsmen in their own practices."

const ProjectDescription = () => {

    function refreshPage() {
        window.location.reload(false);


    }

    return(
        <div className="infoBoxLeft">
            <h1 className="underlined" style={{fontSize: "20px"}}>___PROJECT DESCRIPTION</h1>
            <p style={{fontSize: "15px"}}>MODELS FROM THE PAST FOR THE FUTURE is a site for speculative knowledge production
                that is both <Modal  modalID="modal2 conicBackdrop" modalLineID="modal2Line" text="reflective" description={reflective}/> and performative in investigating and embracing the (as yet) unknown. It situates itself
                in between where we are now and where we are going next and interweaves history with visions of the future. <ul> As an
                    <Modal modalID="modal3 conicBackdrop" modalLineID="modal3Line"  text=" evolving platform" description={chapters}></Modal>, it seeks out alternative approaches and readings of the collection of Design museum Gent.</ul>
                <ul>As a <bold className="underlined">living archive</bold>, it will grow and serve as a sensing layer for past, current and future research practices.</ul>
                If anything, it moves and shies away from classical approaches of indexing and traditional ways of opening up museum collections online.
                Although it takes the collection database as a starting point, it aims at remedying the wretch and clutch of its <Modal text="methodologies">methodologies.</Modal>
                <br/>

                <h1><italic>__pull. transmit. fall in love, and break up again.</italic></h1>

                <br/> The <Modal modalID="modal1 conicBackdrop" modalLineID="modal1Line" text="XENO-MORPHIC" description={xenomorphic}></Modal>, the <Modal modalID="modal4" text="the SENSORIAL"></Modal> & SENSIBLE, the TRANSHISTORICAL, the CURRENT and PAST-FUTURE are all ideologies
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