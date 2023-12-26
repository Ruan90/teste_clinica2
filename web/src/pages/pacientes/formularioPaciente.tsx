import styled from "styled-components"
import CampoDigitacao from "../../components/CampoDigitacao"
import { useState } from "react";

import { TabView, TabPanel } from 'primereact/tabview';
        

// const ContainerPrincipal = styled.div`
// background: #000;
// width: 100vw;
// height: 100vh;
// display: flex;
// flex-direction: column;
// align-items: center;
// `

// const Container = styled.div`
// background-color: white;
// width: 50vw;
// height: 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
// `

export default function FormularioPaciente() {
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    return (
        <>
        <TabView>
            <TabPanel header="Informações básicas">

                <div className="container">
                    <div className="row">
                        <CampoDigitacao 
                            tipo="text" 
                            valor="" 
                            placeholder="digite o nome do paciente" 
                            onChange={setNome}
                            label="Nome:"
                            className="md-4"
                        />
                        <CampoDigitacao 
                            tipo="text" 
                            valor="" 
                            placeholder="digite o apelido do paciente" 
                            onChange={setApelido}
                            label="Apelido:"
                            className="md-4"
                        />
                        <CampoDigitacao 
                            tipo="text" 
                            valor="" 
                            placeholder="digite a nacionalidade" 
                            onChange={setNacionalidade}
                            label="Nacionalidade:"
                            className="md-4"
                        />
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
                
                

            </TabPanel>
            <TabPanel header="Contatos"></TabPanel>
        </TabView>
        </>
    )
}