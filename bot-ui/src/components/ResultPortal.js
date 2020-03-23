import React from 'react';
import SpiderViewPortal from './SpiderViewPortal';

class ResultPortal extends React.Component {
  constructor(props) {
    super()
    this.state = {
    }
  }
    render() {
     let placeholder_text = "Lankesi odottaa tahtosi jolloin no he. Padalla ole han puhuttu tee koskaan jos kyhatty hyvasti. Kymmenta ne etteivat he ja ne pienessa toivoisi. \
  Kun ukko vai irti omat mene. Tahankin leikiksi me ennenkin kaivanut pelattaa et ei jo. Menisi viinan kun tuo maihin kuuluu useita oli isa arveli. \
  Ja en noutamaan vehkeista satamasta ja tarvitaan ai. Siinakin muutamia paasevat kun vahinkoa ero. Isolla se se hiljaa omansa jo ai olevan. Vai sai silmassa vie \
   kuolleen kaivanut. Nousee verkot paansa on ai saatte hetken. Hiljainen vei arentinsa han rosvoavat kursailla toi teistakin soderling. \
   Tiedan kanssa isa tahden lie olivat niilta saanko. Eri sai sisimpansa isa kuivempaan ero miinavenhe lintukarit. Et se on ampuja ei tiedan kanssa\
    tahdot saaren. Isa papattaa vanhasta iso rukoilla kerralla nyt vie kirkolla. Tein tai etko ota hyva kay paha. Nyt mikas sanon ota aivan tee loi. Sai meilta omille vaanii maksaa tuo. \
    Juotu helga en usein ai mikas se et sekin. Kalpea voimme jaa eli vanhan paansa viinaa. Luo ehtymatta paljonkos mahtavana vei kuvitella. Ai me ei hanen ja paljo hanhi. Tyttokin vanhasta \
    jaa ela kuljemme auttaisi toimitan. En rukoili ajautuu sylelta pujahti no te. Kayn asia lie mina ero kone tuli joka. Oli hohhojaa vahinkoa koettaen rukoilla oli porhalsi. \
    Tuo tee soutaa arvata kaataa oma suurin. Muuhunkaan naamallasi kay patriarkat ole. Iso pannaan vie osa tulleet uusilla. Juossut et ai pitaisi mistaan aikoina silmain en poistaa. \
     Hanesta ota kas potkaus otetaan. Sanot ota tuvan yha kohta satoi jos voi. On viime me enhan se kylla ei. Koskaan hankkii et ei te ai viisiin avaimen juossut. "
  
        return (
          <div className = "result-portal">
            <div className = "summarize-div">
                <div className = "textarea-title">
                  <span className = "text-title">
                    PROCESSED SUMMARY 
                  </span>
                </div>
                <div className = "textarea-box">
                  <textarea 
                    rows="16" 
                    cols="120"
                  >
                    {placeholder_text}
                  </textarea>
                </div>
                <div className = "button-div">
                  <div className = "button-left">
                    <button className = "button-save">Click for Another Processing !</button>
                  </div>
                  <div className = "button-right">
                    <button className = "button-save">Save Result to File !</button>
                  </div>
                </div>
                <div className = "category-area">
                  <div className = "category-result">
                    <div className = "category-title">Category : </div>
                    <div className = "category">Entertainment</div>
                  </div>
                    <div className="spider-graph" >
                      <SpiderViewPortal/>
                    </div>
                </div>            
            </div>
          </div>

        )
    }
}

export default ResultPortal;