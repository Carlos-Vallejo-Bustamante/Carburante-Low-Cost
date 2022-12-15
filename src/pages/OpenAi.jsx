import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import parse from "html-react-parser";

const { Configuration, OpenAIApi } = require("openai");

const OpenAi = () => {
    // const [finalText, setFinalText] = useState()
    const [finalText1, setFinalText1] = useState()
    const [finalText2, setFinalText2] = useState()
    const [finalText3, setFinalText3] = useState()
    const [configIA, setConfigIA] = useState({})
    // const [Newprompt, setNewPrompt] = useState({})
    // const [maxTokens, setMaxTokens] = useState({})
    const [showText, setShowText] = useState(false)


    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY_OPENAI,
    })

    const openai = new OpenAIApi(configuration);

    // const response = async () => {
    // setShowText(true)

    //     const completion = await openai.createCompletion({
    //         model: "text-davinci-003",
    //         prompt: Newprompt,
    //         temperature: 0.1,
    //         max_tokens: parseInt(maxTokens),
    //         top_p: 1,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //     });
    //     setFinalText(parse(completion.data.choices[0].text))
    //     setShowText(false)
    //     // setFinalText(React.createElement('div', { id: 'txt' }, completion.data.choices[0].text))
    // }


    // const createNewPromt = (eventHTML) => {
    //     eventHTML.preventDefault()
    //     const { prompt, max_tokens } = configIA

    //     console.log(Newprompt)
    //     setNewPrompt(prompt)
    //     setMaxTokens(max_tokens)
    //     console.log(`${configIA.prompt}<br> ${configIA.max_tokens}`);
    //     response()

    //     generateBlogTopics()
    //     generateBlogSections()
    //     blogSectionExpander()

    // }

    const updateNewPromt = (eventHTML) => {
        const { name, value } = eventHTML.target
        setConfigIA({ ...configIA, [name]: value })

        // const { prompt, max_tokens } = configIA
        // const { blogTopic, blogSection, blogExpander } = configIA

        // setNewPrompt(prompt)
        // setMaxTokens(max_tokens)
        // setNewPromt(eventHTML.target.value)
    };

    const createNewPromt1 = (eventHTML) => {
        eventHTML.preventDefault()
        const { blogTopic } = configIA
        console.log(blogTopic);
        // setNewPrompt1(blogTopic)
        generateBlogTopics(blogTopic)

    }

    const generateBlogTopics = async (blogTopic) => {
        setShowText(true)

        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate list in html format about: ${blogTopic}`,
            temperature: 0.7,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
        setFinalText1(parse(completion.data.choices[0].text))
        setShowText(false)
    }

    const createNewPromt2 = (eventHTML) => {
        eventHTML.preventDefault()
        const { blogSection } = configIA
        // setNewPrompt2(blogSection)
        generateBlogSections(blogSection)

    }

    const generateBlogSections = async (blogSection) => {
        setShowText(true)

        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate paragraph in html format about: ${blogSection}`,
            temperature: 0.6,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
        setFinalText2(parse(completion.data.choices[0].text))
        console.log(parse(completion.data.choices[0].text));
        setShowText(false)
    }

    const createNewPromt3 = (eventHTML) => {
        eventHTML.preventDefault()
        const { blogExpander } = configIA
        // setNewPrompt3(blogExpander)
        blogSectionExpander(blogExpander)

    }

    const blogSectionExpander = async (blogExpander) => {
        setShowText(true)

        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate text of 500 words with h1 and three h2 with three paragraphs in html format about: ${blogExpander}`,
            temperature: 0.7,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
        setFinalText3(parse(completion.data.choices[0].text))
        console.log(completion.data.choices[0].text.split('\n\n', 2)[1]);
        const misString = completion.data.choices[0].text.replace(/\n/g, ' ');
        console.log(misString);
        setShowText(false)
    }





    return (
        <>
            <div className="container">
                <h1 className="my-5 text-center">Herramienta de escritura de blogs online</h1>

                <p className="my-5 text-center">La herramienta de escritura de blogs le permitirá introducir un tema de blog y palabras clave --- y obtener a cambio un blog completo que puede utilizar en cualquier lugar. La herramienta proporciona inicialmente una lista de ideas de temas para elegir, una vez que seleccione un tema, puede seguir adelante y generar un blog de contenido completo AI.</p>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <Form className="" onSubmit={createNewPromt1}>
                            <Form.Group className="mb-3">
                                <div className="form-groupd">
                                    <label className="form-label">¿Sobre qué tema quieres obtener ideas para tu blog?</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="blogTopic"
                                        name="blogTopic"
                                        placeholder="Introduce un tema para el blog"
                                        onChange={updateNewPromt} />
                                </div>
                            </Form.Group>
                            {/* <input type="hidden" name="form1" value="form1" /> */}

                            <Button type="submit" id="blogTopicButton" className="btn btn-primary">Generar ideas para el blog</Button>
                        </Form>
                    </div>

                    {finalText1 &&
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-lg-6">
                                {finalText1 && finalText1}
                            </div>
                        </div>
                    }
                    {showText && < h3 className='text-center mb-5'>davinci-003 Generando texto...</h3>}
                </div>






                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <Form className="" onSubmit={createNewPromt2}>
                            <Form.Group className="mb-3">
                                <div className="form-group">
                                    <label className="form-label">Introduzca el tema del blog que ha seleccionado para escribir</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="blogSection"
                                        name="blogSection"
                                        placeholder="Introduce el título del blog para generar secciones del mismo"
                                        onChange={updateNewPromt} />
                                </div>
                            </Form.Group>
                            {/* <input type="hidden" name="form2" value="form2" /> */}

                            <Button type="submit" className="btn btn-primary">Generar secciones de blog</Button>
                        </Form>
                    </div>


                    {finalText2 &&
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-lg-6">
                                {finalText2 && finalText2}
                            </div>
                        </div>
                    }
                    {showText && < h3 className='text-center mb-5'>davinci-003 Generando texto...</h3>}
                </div>


                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <Form className="" onSubmit={createNewPromt3}>
                            <Form.Group className="mb-3">
                                <div className="form-group">
                                    <label className="form-label">Introduzca el título de la sección del blog que desea ampliar</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="blogExpander"
                                        name="blogExpander"
                                        placeholder="Introduce el título de la sección del blog"
                                        onChange={updateNewPromt} />
                                </div>
                            </Form.Group>
                            {/* <input type="hidden" name="form3" value="form3" /> */}

                            <Button type="submit" className="btn btn-primary">Ampliar el título</Button>
                        </Form>
                    </div>


                    {finalText3 &&
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-lg-6">
                                {finalText3 && finalText3}
                            </div>
                        </div>
                    }
                    {showText && < h3 className='text-center mb-5'>davinci-003 Generando texto...</h3>}
                </div>


            </div>

            {/* <h1 className='text-center my-5'>Prueba OpenAi</h1>

            <Form className='container my-5' onSubmit={createNewPromt}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <div className="form-group">
                        <labelTexto a solicitar</label>
                        <textarea
                            name="prompt"
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            required
                            onChange={updateNewPromt}
                        ></textarea>
                    </div>
                    {/* <Form.Control type="text" name="prompt" placeholder="Introduce tu texto" required onChange={updateNewPromt} /> */}
            {/* </Form.Group> */}

            {/* <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Longitud de tu árticulo</Form.Label>
                    <Form.Control type="number" name="max_tokens" placeholder="Introduce tu longitud en numeros" required onChange={updateNewPromt} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Dame mi texto
                </Button>

            </Form> */}

            {/* {finalText &&
                <div className='container'>
                    <h2 className='text-center mb-5'><u>El articulo completo a continuación</u></h2>
                    {finalText}
                </div>
            }
            {showText && < h3 className='text-center mb-5'>davinci-003 Generando texto...</h3>} */}
        </>
    )
}

export default OpenAi