import unVeranoSinTi from 'public/un_verano_sin_ti.webp'
import perdoname from 'public/perdoname.jpeg'
import malaMia from 'public/mala_mia.jpeg'
import todoDeTi from 'public/todo_de_ti.jpeg'
import xUltimaVez from 'public/x_ultima_vez.jpeg'
import amoresComoElNuestro from 'public/amores_como_el_nuestro.jpeg'
import dinero from 'public/dinero.jpeg'
import chivirika from 'public/chivirika.jpeg'
import loQuePasoPaso from 'public/lo_que_paso_paso.jpeg'
import soyElPerdedor from 'public/soy_el_perdedor.jpeg'
import solia from 'public/solia.jpeg'
import peroYaNo from 'public/pero_ya_no.jpeg'
import meRehuso from 'public/me_rehuso.jpeg'
import popopo from 'public/popopo.jpeg'
import miFlaca from 'public/mi_flaca.jpeg'
import solosTuYYo from 'public/solos_tu_y_yo.jpeg'
import primeraCita from 'public/primera_cita.jpeg'
import unaVez from 'public/una_vez.jpeg'

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
        content: "valen más que tu para mi."
    },
    {
        content: "Lo que pasó, pasó,",
        image: loQuePasoPaso
    },
    {
        content: "quiero empezar desde cero,",
    },
    {
        content: "se que soy el perdedor",
        image: soyElPerdedor
    },
    {
        content: "y solia",
        image: solia
    },
    {
        content: "desplazar nuestro amor por otras cosas",
    },
    {
        content: "pero ya no más",
        image: peroYaNo
    },
    {
        content: "te lo juro",
    },
    {
        content: "por eso",
    },
    {
        content: "me rehuso",
        image: meRehuso
    },
    {
        content: "a no",
    },
    {
        content: "popopo (pelear)",
        image: popopo
    },
    {
        content: "por ti.",
    },
    {
        content: "Asi que, que dices",
    },
    {
        content: "mi flaca,",
        image: miFlaca
    },
    {
        content: "solos tu y yo,",
        image: solosTuYYo
    },
    {
        content: "en una",
    },
    {
        content: "primera cita",
        image: primeraCita
    },
    {
        content: "una vez más.",
        image: unaVez
    },

] satisfies CardProperties[]