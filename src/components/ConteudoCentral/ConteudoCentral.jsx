import './ConteudoCentral.css'
import Itemstories from './Stories/ItemStories'
import Post from './Post/Post'
import iconStory2 from '../../assets/alex.png'
import iconStory3 from '../../assets/vw.png'
import iconStory4 from '../../assets/podpah.jpeg'
import iconStory5 from '../../assets/prof.png'
import iconStory6 from '../../assets/convictus.png'
import iconStory7 from '../../assets/iconStory7.png'
import iconStory8 from '../../assets/mercy.jpeg'
import iconStory9 from '../../assets/inteligencia.jpg'
import post1 from '../../assets/foto2.jpg'
import post2 from '../../assets/memecss.jpeg'
import post3 from '../../assets/foto3.jpeg'
import post4 from '../../assets/foto4.jpg'
import iconpost2 from '../../assets/devmeme.png'
import iconpost3 from '../../assets/south.jpeg'
import iconpost4 from '../../assets/perfilpalio.png'

export default function ConteudoCentral(){
    return(
      <div className='ConteudoCentral'>
        <div className="Stories">
          <Itemstories nameText="alexm..." icon={iconStory2}/>
          <Itemstories nameText="vwbrasil" icon={iconStory3}/>
          <Itemstories nameText="podpah" icon={iconStory4}/>
          <Itemstories nameText="gab.a..." icon={iconStory5}/>
          <Itemstories nameText="convictv..." icon={iconStory6}/>
          <Itemstories nameText="instituto..." icon={iconStory7}/>
          <Itemstories nameText="Mercy" icon={iconStory8}/>
          <Itemstories nameText="inteligencia..." icon={iconStory9}/>
        </div>
        <div className="Timeline">
          <Post 
          icon={iconStory3}
          nameUser="vwbrasil "
          time="5 h"
          post={post1}
          miniIcon={iconStory2}
          NameLike='alexmsilva17_'
          NamePerfil='vwbrasil'
          Descricao='"Pronto para acelerar com o incrível Volkswagen Golf GTI! 🚗💨 
          Esse hatchback esportivo é a combinação perfeita de estilo e desempenho, com sua elegante carroceria preta, 
          rodas de liga leve reluzentes e a herança GTI que inspira confiança. Prepare-se para uma viagem emocionante a cada curva! 
          🔥🏁 #VWGolfGTI #Esportivo #Estilo #Velocidade"'
          quantComent='133'
          NamePerfilComent='alexmsilva17_'
          coment='Carro lindoo!!'
          NamePerfilComent2='jildasio.silva.14'
          coment2='o melhor!'
          />
          <Post 
          icon={iconpost2}
          nameUser="memesparadevs"
          time="1 d"
          post={post2}
          miniIcon={iconStory7}
          NameLike='Instituto Proa'
          NamePerfil='memesparadevs'
          Descricao='margin-top: 40px'
          quantComent='47'
          NamePerfilComent='diegopassos75'
          coment='É tipo isso kkkk'
          NamePerfilComent2='Jao.freitas'
          coment2='Siimm kkkk'
          />
          <Post 
          icon={iconpost3}
          nameUser="southamericamemes"
          time="2 d"
          post={post3}
          miniIcon={iconStory4}
          NameLike='PodPah'
          NamePerfil='southamericamemes'
          Descricao='Quando você abre a geladeira pela 3 vez e não tem nada. '
          quantComent='43'
          NamePerfilComent='__raul.moreno'
          coment='Muito isso kkkk'
          NamePerfilComent2='joaolucas'
          coment2='Pior quando é de madrugada'
          />
          <Post 
          icon={iconpost4}
          nameUser="paixaochamadapalio"
          time="4 d"
          post={post4}
          miniIcon={iconStory2}
          NameLike='alexmsilva17_'
          NamePerfil='paixaochamadapalio'
          Descricao='Palio G2, o melhor'
          quantComent='68'
          NamePerfilComent='Elon Musk'
          coment='Wow, nice car, bro'
          NamePerfilComent2='PetrolHead'
          coment2='Verdade seja dita'
          />
        </div>
      </div>
    )
}