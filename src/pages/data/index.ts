import unVeranoSinTi from 'public/un_verano_sin_ti.webp'
import perdoname from 'public/perdoname.jpeg'
import malaMia from 'public/mala_mia.jpeg'
import todoDeTi from 'public/todo_de_ti.jpeg'
import xUltimaVez from 'public/x_ultima_vez.jpeg'
import amoresComoElNuestro from 'public/amores_como_el_nuestro.jpeg'
import dinero from 'public/dinero.jpeg'
import chivirika from 'public/chivirika.jpeg'
import type { StaticImageData } from 'next/image'

export type CardProperties = {
     content: string
     image?: StaticImageData
}

export default [
    {
        content: "Thais, no quiero pasar",
    },
    {
        content: "un verano sin ti,",
        image: unVeranoSinTi,
    },
    {
        content: "perdoname,",
        image: perdoname
    },
    {
        content: "mala mia",
        image: malaMia
    },
    {
        content: "pero quiero"
    },
    {
        content: "todo de ti,",
        image: todoDeTi
    },
    {
        content: "X ultima vez,",
        image: xUltimaVez
    },
    {
        content: "dame una oportunidad,",
    },
    {
        content: "amores como el nuestro",
        image: amoresComoElNuestro
    },
    {
        content: "lo merecen"
    },
    {
        content: "dejame demostrarte que ni el"
    },
    {
        content: "dinero",
        image: dinero
    },
    {
        content: "ni una"
    },
    {
        content: "chivirika,",
        image: chivirika
    },
    {
        content: "valen mas que tu para mi."
    }

] satisfies CardProperties[]