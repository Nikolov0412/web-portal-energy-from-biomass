import { Box, Container, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RenewableEnergyChart from "../components/Charts/renewableEnergyChart";

export function EnergyCreationPage() {
    return (
        <div>
            <Navbar />
            <Container maxWidth={false}
                sx={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            > <Typography variant="h3" color={"white"}>
                    Production processes
                </Typography>
            </Container>
            <Container maxWidth={false}>
                <Typography variant="h4" align="center" pt="1%">Biomass energy production processes</Typography>
            </Container>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://www.arhse.com/wp-content/uploads/2020/08/Steps-in-Pyrolisis.jpg'}
                            alt="Example"
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Pyrolysis
                        </Typography>
                        <Typography variant="body1">
                            Pyrolysis is a chemical process that involves the breakdown of organic materials through the application of heat in the absence of oxygen. This process is commonly used in the waste management industry to convert waste materials into usable products, such as biochar, syngas, and bio-oil.
                            One of the key benefits of pyrolysis is that it allows for the conversion of waste materials into valuable resources. It is possible to improve soil fertility and increase crop yields by using biochar as a soil amendment. It is possible to use syngas, which is a mixture of carbon monoxide and hydrogen, to generate electricity. And bio-oil, a liquid byproduct of the pyrolysis process, can be further refined into a variety of chemicals and fuels.
                            There are several different types of pyrolysis, each with its own unique characteristics and applications. One common type of pyrolysis is slow pyrolysis, which involves the breakdown of organic materials at relatively low temperatures (around 400-600 degrees Celsius) over a period of several hours. This type of pyrolysis is typically used for the production of biochar.
                            <br></br>
                            In addition to its use in the waste management industry, pyrolysis has also been explored as a potential solution for the disposal of hazardous waste materials, such as medical waste and tires. By applying heat to these waste materials in the absence of oxygen, harmful substances can be broken down and rendered harmless.
                            <br></br>
                            Another potential application of pyrolysis is in the field of energy production. The syngas produced through the pyrolysis of waste materials can be used to generate electricity, providing a clean and sustainable source of power. Additionally, pyrolysis can produce bio-oil that can replace fossil fuels, reducing our dependence on non-renewable energy sources.
                            <br></br>
                            However, there are also some limitations to the use of pyrolysis. One major challenge is the cost of the technology, as it can be expensive to implement on a large scale. Further research and development are needed to improve pyrolysis’ efficiency and effectiveness.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://www.researchgate.net/publication/362748716/figure/fig4/AS:11431281155702423@1683253014653/Schematic-for-the-fermentation-process-19-41-137-138-144-146.png'}
                            alt="Example"
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Fermentation
                        </Typography>
                        <Typography variant="body1">
                            What is fermentation?
                            <br></br>
                            A digester produces biogas from biomass. A menu is created for optimal conversion of input (biomass) into the desired output (biogas). In bio-digestion, bacteria and fungi take care of biomass conversion.
                            There are different types of biomass suitable for fermentation. These can be divided into plant material and organic waste streams, such as:
                            (biogas from) organic waste
                            (biogas from) Manure
                            (biogas from) Roadside grass
                            Biogas is a renewable gas which consists of approximately 60 percent methane. In addition, biogas contains a large amount of CO2 and a small amount of sulfur. In comparison, Groningen (natural) gas consists of approximately 88 percent methane.
                            <br></br>
                            How does fermentation work?
                            <br></br>
                            In theory, the operation of a biodigester is quite simple. Through the fermentation of biomass, you produce biogas. The biogas produced can be used in a variety of ways.
                            With a combined heat and power (CHP) system, biogas can be converted into heat and electricity. In addition, you can use biogas in gas boilers to produce heat.
                            It is also possible to make a gas with the same quality as the natural gas in the Dutch gas grid. To do this, the biogas is cleaned and the methane content is brought to the same level as in natural gas. We call this green gas. This is fed into the gas grid and used by households, offices and other businesses.
                            Green gas can also be used as transportation fuel in your car. This is also called Bio-CNG in some cases. Strong cooling of green gas creates a liquid fuel with a high energy density called Bio-LNG. This can be used in heavier forms of transportation, such as trucks and ships.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://www.allpowerlabs.com/wp-content/uploads/2012/08/Five-Processes-of-Gasification_shorter-e1456357184596.png'}
                            alt="Example"
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Gasification
                        </Typography>
                        <Typography variant="body1">
                            Gasification is most simply thought of as choked combustion or incomplete combustion. It is burning solid fuels like wood or coal without enough air to complete combustion, so the output gas still has combustion potential. The unburned gas is then piped away to burn elsewhere as needed.
                            Gas produced by this method goes by a variety of names: wood gas, syngas, producer gas, town gas, generator gas, and others. It’s sometimes also called biogas, though biogas more typically refers to gas produced via microbes in anaerobic digestion. In the context of biomass gasification using air-aspirated gasifiers, the term producer gas is the term we will be using, since the other terms have implications that do not necessarily apply to the gas produced by our gasifiers.
                            <br></br>
                            Now let’s complicate things slightly. True gasification is a bit more than just the choked combustion summary presented above. It is more accurately understood as staged combustion. It is a series of distinct thermal events put together so as to purpose convert solid organic matter into specific hydrocarbon gases as output.
                            Simple incomplete combustion is a dirty mess. The goal in gasification is to take control of the discrete thermal processes usually mixed together in combustion, and reorganize them towards desired end products. In digital terms, “Gasification is the operating system of fire”. Once you understand its underlying code, you can pull fire apart and reassemble it to your will, as well as a stunning variety of end products and processes.
                            Gasification is made up for five discrete thermal processes: Drying, Pyrolysis, Combustion, Cracking, and Reduction. All of these processes are naturally present in the flame you see burning off a match, though they mix in a manner that renders them invisible to eyes not yet initiated into the mysteries of gasification. Gasification is merely the technology to pull apart and isolate these separate processes, so that we might interrupt the “fire” and pipe the resulting gases elsewhere.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://drive.tiny.cloud/1/8cadf6pkwkhsiz9mruuj1hgybj2xd7ww2v1as8ktymfewkug/c2bdd142-bc9e-4e16-901d-c97a264575d2'}
                            alt="Example"
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Liquefaction
                        </Typography>
                        <Typography variant="body1">
                            Liquefaction is the process of converting natural gas (methane) from a gas to a liquid by cooling the gas to a temperature of about -260°F (-162°C). The liquid methane is called liquefied natural gas or LNG. Liquefaction of natural gas reduces the volume of the gas by a factor of 610. This allows the gas to be stored in a smaller vessel than is required for natural gas in the gaseous state. Natural gas is liquefied for multiple reasons:
                            To transport the LNG via tanker on the ocean to move natural gas long distances from producting regions to consuming regions
                            To transport the LNG via tanker truck on land where gas pipeline transport is not available
                            To store LNG in above-ground tanks for future regasification and use, either at an LNG import terminal or at smaller peaking storage facilities located on gas distribution systems
                            Gas is typically liquefied at one of three points in the gas delivery system:
                            For ship tanker transport, it is liquefied in the production region, most commonly in an onshore LNG export terminal located in a point with access to large ships. In some cases, production gas is also liquefied offshore by floating liquefied natural gas (FLNG) ships or barges.
                            For truck tanker transport, it is liquefied in smaller satellite LNG facilities connected to gas transmission or distribution lines.
                            For peaking storage facilities, it is liquefied within the storage facility connected to the gas distribution system.
                            The three basic steps of the liquefaction process are as follows:
                            Removal of any impurities and recovery of any natural gas liquids (NGLs)
                            Refrigeration of the gas until it liquefies
                            Movement of the LNG to storage

                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://www.tn.gov/content/tn/environment/program-areas/sw-mm-organics/anaerobic-digestion/jcr%3acontent/content/tn_image.img.png/1520285016919.png'}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Anaerobic Digestion
                        </Typography>
                        <Typography variant="body1">
                            According to the American Biogas Council, “Anaerobic digestion is a series of biological processes in which microorganisms break down biodegradable material in the absence of oxygen.” The products of this process are biogas, liquid digestate, and solid digestate. A similar process occurs naturally in marshes and wetlands, producing swamp gas. The organic fraction in landfills also breaks down primarily anaerobically, producing landfill gas. Biogas, swamp gas, and landfill gas all contain methane, carbon dioxide, and hydrogen sulfide, but the percentages vary among them.
                            Anaerobic digestion (AD) systems are designed to capture the biogas produced from this breakdown and produce energy. AD’s place on EPA’s Waste Management Hierarchy depends upon the final disposition of the digestate. If the digestate is beneficially reused (e.g. composting, land application), AD would reside in the “Recycling/Composting” category. If the digestate is ultimately landfilled however, AD would reside in the “Energy Recovery” category.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://www.researchgate.net/publication/360429304/figure/fig2/AS:1155444903030806@1652490940994/Esterification-and-transesterification-reactions-to-produce-esters-11-12.png'}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Esterification/Transesterification
                        </Typography>
                        <Typography variant="body1">
                            Esterification is the reaction between carboxylic acids with alcohols in the presence of hydrochloric or sulfuric acids to produce carboxylic acid esters, the formula RCOOR′ (R and R′ are any organic combining groups). The alkoxy group (R′O) of the alcohol replaces the hydroxyl group (OH) of the carboxylic acid during the process. Low molecular weight carboxylic acid esters are colourless, flammable liquids with sweet pleasant odours that are just slightly water soluble. The flavour and aroma of flowers and fruits are attributed to a variety of esters.
                            The traditional method of ester synthesis is called Fischer esterification, which entails reacting an alcohol with a carboxylic acid in the presence of a dehydrating agent. For common esters, such as ethyl acetate, the equilibrium constant is around 5. Without a catalyst, the reaction proceeds slowly. Therefore, sulfuric acid is frequently used as a catalyst in this process.
                            <br></br>
                            Transesterification is a chemical process used to produce biodiesel from renewable sources like vegetable oils, animal fats, or waste cooking oils. It involves the conversion of these lipid feedstocks into a more suitable form for use as a fuel in diesel engines.
                            The process works by reacting the feedstock with an alcohol, typically methanol or ethanol, in the presence of a catalyst, usually an alkali like sodium hydroxide (NaOH) or potassium hydroxide (KOH). The reaction breaks the ester bonds in the triglycerides present in the feedstock and replaces them with alcohol molecules. This results in the formation of mono-alkyl esters, which are the main components of biodiesel, and glycerol as a byproduct.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: 2 }}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                width: 500,
                                height: 'auto',
                                marginRight: 2,
                            }}
                            src={'https://cdn.britannica.com/39/128839-050-D8E664DC/Reaction-methyl-acetate-water-hydrolysis-ester.jpg?w=400&h=300&'}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Hydrolysis
                        </Typography>
                        <Typography variant="body1">
                            hydrolysis, in chemistry and physiology, a double decomposition reaction with water as one of the reactants. Thus, if a compound is represented by the formula AB in which A and B are atoms or groups and water is represented by the formula HOH, the hydrolysis reaction may be represented by the reversible chemical equation AB + HOH ⇌ AH + BOH. The reactants other than water, and the products of hydrolysis, may be neutral molecules, as in most hydrolyses involving organic compounds, or ionic molecules, as in hydrolyses of salts, acids, and bases.

                            Hydrolysis involving organic compounds may be illustrated by the reaction of water with an ester of a carboxylic acid; all such esters have the general formula RCO―OR′, in which R and R′ are combining groups (for example, if R and R′ both represent the methyl group, CH3, the ester is methyl acetate). The hydrolysis involves several steps, of which the slowest is the formation of a covalent bond between the oxygen atom of the water molecule and the carbon atom of the ester. In succeeding steps, which are very rapid, the carbon–oxygen bond of the ester breaks and hydrogen ions become detached from the original water molecule and attached to the nascent alcohol molecule. The whole reaction is represented by the equation
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant='h5'>Biomass Energy: A Growing Power Source</Typography>
                <Typography variant="body1">
                    Biomass energy has emerged as a significant player in the global energy landscape. Our latest chart on energy production from various sources, based on 2023 data from US, clearly illustrates this trend. As you can see, biomass energy constitutes a substantial portion of our overall energy output, highlighting its critical role in meeting our energy needs.

                    Over the years, the growth of biomass energy has been remarkable. From being a modest contributor, it has rapidly expanded, driven by advancements in technology and increasing awareness of sustainable energy practices. This growth trajectory is expected to continue as we invest more in renewable energy sources and innovate new methods to harness biomass efficiently.

                    The rapid increase in biomass energy production not only helps reduce our reliance on fossil fuels but also contributes to lowering greenhouse gas emissions. By utilizing organic materials like agricultural residues, wood chips, and even certain types of waste, biomass energy provides a renewable and eco-friendly alternative that supports both environmental and economic goals.
             
                </Typography>
                <RenewableEnergyChart/>
            </Box>
            <Footer />
        </div>
    )
}