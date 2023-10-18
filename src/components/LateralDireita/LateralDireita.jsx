import './LateralDireita.css'
import './Usuario'
import './Sugestoes'
import Usuario from './Usuario'
import icon from '../../assets/foto1.jpg'
import icon2 from '../../assets/PH.jpg'
import icon3 from '../../assets/renato.jpeg'
import icon4 from '../../assets/thiagonigro.png'
import icon5 from '../../assets/hyperx.png'
import Sugestoes from './Sugestoes'

export default function LateralDireita(){
    return(
        <div className='LateralDireita'>
            <Usuario 
            imgPerfil={icon}
            nome='thg_carlos'
            nick='Thiago Carlos'
            />
            <div className='midAside'>
                <span className='midAsideChild1'>Sugestões para você</span>
                <div className="separador"></div>
                <span className='midAsideChild2'>Ver tudo</span>
            </div>
            <Sugestoes 
            imgSugest={icon2}
            nomeSugest="petrolhead"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon3}
            nomeSugest="Renato Cariani"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon4}
            nomeSugest="Thiago Nigro"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon5}
            nomeSugest="HyperX"
            seguido='Segue você'
            />
            <div className="direitos">
                <span><p>Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade - Termos - Localizações - Idioma - Meta verified</p></span>
                <span><p>&copy; 2023 INSTAGRAM FROM THIAGO CARLOS</p></span>
            </div>
        </div>
    )
}