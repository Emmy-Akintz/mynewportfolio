import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { MdMenu, MdCancel } from 'react-icons/md'
import { ThemeContext } from '../contexts/ThemeContext'
import ToggleTheme from '../components/ToggleTheme'

function ParentPage() {
  const [sidebar, setSidebar] = useState(false)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  return (
    <div className='lg:flex justify-between'  style={{ background: theme.bg, color: theme.syntax }}>
      <div className='absolute top-[10px] right-[10px]'>
        <div className="lg:hidden p-4">
          <div className={sidebar ? 'hidden' : 'block'} onClick={() => setSidebar(true)}>
            <MdMenu />
          </div>
          <div className={sidebar ? 'block' : 'hidden'} onClick={() => setSidebar(false)}>
            <MdCancel />
          </div>
        </div>
        <div className="">
          <ToggleTheme />
        </div>
      </div>
      <div className={sidebar ? '' : 'hidden lg:block'} >
        <Sidebar />
      </div>
      <div className="p-12 w-[350px] lg:w-[900px]">
        <h1 className="">Main page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam? In ipsam laborum exercitationem reprehenderit consequatur dolorum provident velit excepturi incidunt! Quas quisquam veritatis dolores voluptates odio iste hic, officiis impedit nostrum enim iusto incidunt laborum odit? Odit alias quo magni? Laudantium molestias magnam debitis non libero sapiente quos consequatur voluptate nemo, eius nisi fuga maiores ab consequuntur! Accusamus rerum amet sequi qui officiis numquam neque dolorem et eveniet assumenda cum rem animi, quaerat officia fuga id veritatis, vel eius nam nisi blanditiis maiores incidunt ab? Neque facere repellat voluptatum libero iusto vel sapiente, dolor vitae nihil dicta fugiat eos quae! Reprehenderit omnis, optio quod tenetur eaque perferendis eos, esse consequatur voluptatum molestiae exercitationem consectetur eveniet dicta alias dolorem quis maiores. Neque laudantium officia quaerat dolores quis sit hic fugiat. Voluptatibus dignissimos molestias dolorem nesciunt, perspiciatis maiores est quae odio! Saepe nostrum iure consectetur dignissimos eum laboriosam nulla harum odio molestiae! Sit perspiciatis sapiente non porro, neque laboriosam dignissimos maxime maiores ea, alias, ad corporis fuga molestias impedit eum saepe adipisci quaerat! Tenetur exercitationem, impedit repellat libero reiciendis quia rerum debitis odio, voluptas veniam molestiae inventore error ducimus temporibus aut qui quo maxime nemo repudiandae vel non deleniti vitae. Quae harum delectus voluptas expedita, consectetur, obcaecati magni in ad aspernatur ipsa accusamus eligendi? Non quam praesentium atque aut, asperiores impedit vitae minus totam culpa sequi id fugiat quisquam rem optio amet aspernatur deserunt, esse provident a eaque nesciunt ea commodi! Blanditiis, iste architecto magnam modi perferendis aperiam delectus repellendus, aliquid nihil eaque aspernatur hic repudiandae mollitia! Sapiente consequuntur, aliquid inventore saepe esse quia possimus expedita accusamus nisi? Cupiditate tempore quaerat libero odit soluta veniam eveniet corrupti architecto obcaecati, repudiandae nihil blanditiis suscipit, culpa reprehenderit at, odio minima explicabo? Unde ea voluptatum iusto nihil cum debitis? Fuga a sit fugit, velit maiores eveniet officiis, mollitia, explicabo voluptatibus nisi pariatur corrupti temporibus alias odit. Soluta doloremque explicabo accusantium! Ex quasi quibusdam quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at nesciunt recusandae ut cupiditate. Impedit voluptatem officia nostrum neque ipsa ab architecto atque soluta molestias. Reprehenderit architecto excepturi ratione placeat corrupti iusto nihil ad ullam itaque debitis ex modi ipsum, culpa voluptatem quas doloremque suscipit! Quas minima doloremque, obcaecati fugiat iusto laudantium sunt explicabo voluptates itaque vitae, cum optio ullam perspiciatis quo fuga corporis sint a architecto autem quibusdam non earum. Doloribus aspernatur quaerat quod dolorum, amet repellendus deleniti necessitatibus ducimus, magni autem minus similique quia quos. Eaque cumque expedita incidunt distinctio sapiente, eius nobis? Iure nemo dicta totam exercitationem minima eaque unde soluta voluptates facilis odio nesciunt explicabo quaerat ipsam corporis voluptatem, odit, voluptate qui. Consequuntur ipsam nostrum tempora id necessitatibus iure velit mollitia nam at inventore, quaerat nihil ut commodi nesciunt eligendi non ratione voluptatem iste ipsum veniam! Quibusdam minima nihil quae fugiat et nam dolores? Exercitationem repellendus incidunt nihil laborum. In rem eveniet quos consequatur dolore ex ipsam, repellat perferendis maxime cum at reiciendis nesciunt ea, officiis nam! Quam aliquam dolore eligendi, quaerat alias quo provident ea similique dolores officia a modi facere laudantium sed consequuntur quia minus suscipit explicabo, laboriosam repudiandae! Recusandae, dignissimos reprehenderit culpa rerum possimus odio dolorum at ipsum saepe eveniet neque repudiandae atque non nisi eligendi nobis facere numquam! Doloremque quidem ipsum nulla quam quaerat odio corrupti doloribus, quae, sequi numquam animi repellendus commodi saepe quos? Hic, odit beatae. Sunt expedita aliquam quas porro repellendus eligendi unde. Dignissimos unde dolorem, recusandae aspernatur soluta obcaecati officiis perspiciatis velit maiores consequatur cum commodi blanditiis ut vitae ipsam quaerat earum non fugiat dolore tempore! Repellat quidem possimus aperiam deserunt dolores porro debitis exercitationem corrupti, eius sint a ipsum necessitatibus accusantium consequuntur nemo similique earum alias asperiores fugiat ea, distinctio quis! Alias, excepturi officia. Repellat, quam nemo!</p>
      </div>
    </div>
  )
}

export default ParentPage