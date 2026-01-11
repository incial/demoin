import { motion } from "framer-motion";
import AdidasLogo from "./logosclients/Adidas.svg";
import AJCELogo from "./logosclients/AJCE.png";
import APJParamedicalsLogo from "./logosclients/APJ Paramedicals.jpg";
import BlaupunktLogo from "./logosclients/Blaupunkt.png";
import CognilearnLogo from "./logosclients/Cognilearn.jpg";
import CoincoLogo from "./logosclients/Coinco.png";
import DatalabsLogo from "./logosclients/Datalabs.svg";
import DCKottayamLogo from "./logosclients/DC Kottayam.png";
import EdenPublicSchoolLogo from "./logosclients/Eden Public School.png";
import EslaSpicesLogo from "./logosclients/Esla Spices.jpg";
import EutropicsMainLogo from "./logosclients/eutropics-mainlogo.png";
import FotoloomLogo from "./logosclients/Fotoloom.jpg";
import FunfeeLogo from "./logosclients/Funfee.png";
import HomescapesLogo from "./logosclients/Homescapes.png";
import JaybeesCaterersLogo from "./logosclients/Jaybees Caterers.jpg";
import MannaLogo from "./logosclients/Manna.png";
import MeowendiLogo from "./logosclients/Meowendi.png";
import MIRACOLogo from "./logosclients/MIRACO.jpg";
import PreconLogo from "./logosclients/Precon.jpg";
import SkinzoneLogo from "./logosclients/Skinzone.jpg";
import USI3DTLogo from "./logosclients/USI3DT.png";
import VarkitchenLogo from "./logosclients/Varkitchen Logo.png";
import VoltantLogo from "./logosclients/Voltant.png";

const clients = [
  { logo: AdidasLogo },
  { logo: AJCELogo },
  { logo: APJParamedicalsLogo },
  { logo: BlaupunktLogo },
  { logo: CognilearnLogo },
  { logo: CoincoLogo },
  { logo: DatalabsLogo },
  { logo: DCKottayamLogo },
  { logo: EdenPublicSchoolLogo },
  { logo: EslaSpicesLogo },
  { logo: EutropicsMainLogo },
  { logo: FotoloomLogo },
  { logo: FunfeeLogo },
  { logo: HomescapesLogo },
  { logo: JaybeesCaterersLogo },
  { logo: MannaLogo },
  { logo: MeowendiLogo },
  { logo: MIRACOLogo },
  { logo: PreconLogo },
  { logo: SkinzoneLogo },
  { logo: USI3DTLogo },
  { logo: VarkitchenLogo },
  { logo: VoltantLogo },
];

const Clients = () => {
  return (
    <section 
      id="clients" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-muted-foreground block mb-4">
            trusted by
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            People who believe in <span className="text-primary">growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex items-center justify-center p-6 md:p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/50"
            >
              <img src={client.logo} alt="" className="h-8 md:h-10 object-contain w-full" />
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-handwriting text-xl text-muted-foreground text-center mt-12"
        >
          and counting
        </motion.p>
      </div>
    </section>
  );
};

export default Clients;
