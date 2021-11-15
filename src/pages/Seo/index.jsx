import seo from '../../images/seo.png';
import joinha from '../../images/Joinha.jpg'


export const Seo = () => {
    return(
        <>
        <div>
            <h1 className="text-center">Seo para React</h1>
            <p>Embora o React seja frequentemente elogiado por tornar o desenvolvimento de front-end mais eficiente, essa biblioteca popular pode ser problemática para os mecanismos de pesquisa</p>
            <p>O Google recebe mais de 90% de todas as pesquisas online ,Este instantâneo tirado da documentação do Google pode nos ajudar. Observe que este é um diagrama de blocos simplificado. O Googlebot real é muito mais sofisticado.
Observe que há uma distinção clara entre</p>
            <img src={seo} alt="diagrama" className="w-100"></img>
            <br />
        </div>   
        <p>o estágio Processing que analisa HTML e o estágio Renderer que executa JavaScript.
Essa distinção existe porque a execução de JavaScript é cara , visto que o Googlebots precisa examinar mais de 130 trilhões de páginas da web . Portanto, quando o Googlebot rastreia uma página da web, ele analisa o HTML imediatamente e, em seguida, coloca o JavaScript na fila para ser executado mais tarde. A documentação do Google menciona que uma página permanece na fila de renderização por alguns segundos, embora possa demorar mais.</p> 
        <p>Mas para salvar o dia do programador existem libs que nos ajudam com este trabalho como redux, helmet , entre outras , mas uma das mais famosas e o next js , uma maravilha :)</p>
        <img src={joinha} alt="joinha" className="w-100"/>  
         <br />   
        <h1 className="text-center">Next js</h1>
        <p>Next.js é uma estrutura para aplicativos React gerados estaticamente ou renderizados pelo servidor que abre muitas possibilidades para os desenvolvedores: criação de aplicativos prontos para uso, de configuração zero, divisão de código, exportação de uma página HTML estática, etc. etc.




Next.jsfornecerá altos resultados de otimização de mecanismo de pesquisa e você não precisa fazer nada de especial para fazer isso - você só precisa criar um aplicativo. No entanto , bons resultados de SEO não são fornecidos especificamente pelo Next.js , mas pela renderização do servidor.


De uma maneira mais simples ele renndeniza nosso codigo js em html no servidor , quando ela vem pro lado do cliente já  vem em html , facilitando a vida dos robos do google
</p>
        

        </>
    )
}