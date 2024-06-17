import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function BioMassTypesPage() {
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
                    Biomass Types
                </Typography>
            </Container>
            <Container maxWidth={false}>
                <Typography align="center" variant="h5" pt='10px'>Most common biomass types</Typography>
                <Grid container spacing={10} sx={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Grid item xs={1.4} />
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1625827248310-f1ff0e74fc7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="learning"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dedicated Energy Crops
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Dedicated energy crops are non-food crops that can be grown on marginal land (land not suitable for traditional crops like corn and soybeans) specifically to provide biomass. These break down into two general categories: herbaceous and woody. Herbaceous energy crops are perennial (plants that live for more than 2 years) grasses that are harvested annually after taking 2 to 3 years to reach full productivity. These include switchgrass, miscanthus, bamboo, sweet sorghum, tall fescue, kochia, wheatgrass, and others. Short-rotation woody crops are fast-growing hardwood trees that are harvested within 5 to 8 years of planting. These include hybrid poplar, hybrid willow, silver maple, eastern cottonwood, green ash, black walnut, sweetgum, and sycamore. Many of these species can help improve water and soil quality, improve wildlife habitat relative to annual crops, diversify sources of income, and improve overall farm productivity. </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="measuring"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Agricultural Crop Residue
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Agricultural residues are readily available and inexpensive renewable lignocellulosic fibre resources that can be used as an alternative to woody lignocellulosic biomass. These residues have similar structure, composition and properties to those of other plant fibres and make them suitable for composite, textile and pulp and paper application. The demand for agro-residues as alternatives to woody cellulosic fibres has risen recently due to the increased awareness of global deforestation and environmental concerns of burning the residues, and also because of the low cost of the residues compared to other plant fibres. Further, use of agro-residues can alleviate the shortage of wood resources in countries where there are few forestry resources. The major lignocellulosic agricultural residues are wheat, rice, barley straw, corn stover, sorghum stalks, coconut husks, sugarcane bagasse, and pineapple and banana leaves.</Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1531338926683-57dd1ba40966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZvcmVzdHJ5JTIwUmVzaWR1ZXN8ZW58MHx8MHx8fDA%3D"
                                title="data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Forestry Residues
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Forest biomass feedstocks fall into one of two categories: forest residues left after logging timber (including limbs, tops, and culled trees and tree components that would be otherwise unmerchantable) or whole-tree biomass harvested explicitly for biomass. Dead, diseased, poorly formed, and other unmerchantable trees are often left in the woods following timber harvest. This woody debris can be collected for use in bioenergy, while leaving enough behind to provide habitat and maintain proper nutrient and hydrologic features. There are also opportunities to make use of excess biomass on millions of acres of forests. Harvesting excessive woody biomass can reduce the risk of fire and pests, as well as aid in forest restoration, productivity, vitality, and resilience. This biomass could be harvested for bioenergy without negatively impacting the health and stability of forest ecological structure and function. </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1.4} />
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1673208769691-e74104d853fd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Landfill gas and Biogas
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bacteria and fungi are not picky eaters. They eat dead plants and
                                    animals, causing them to rot or decay. A fungus on a rotting log is converting
                                    cellulose to sugars to feed itself. Although this process is slowed in a landfill, a
                                    substance called methane gas is still produced as the waste decays. New
                                    regulations require landfills to collect methane gas for safety and environmental
                                    reasons. Methane gas is colorless and odorless, but it is not harmless. The gas
                                    can cause fires or explosions if it seeps into nearby homes and is ignited.
                                    Landfills can collect the methane gas, purify it, and use it as fuel. Methane can
                                    also be produced using energy from agricultural and human wastes. Biogas
                                    digesters are airtight containers or pits lined with steel or bricks. Waste put into
                                    the containers is fermented without oxygen to produce a methane-rich gas. This
                                    gas can be used to produce electricity, or for cooking and lighting.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://media.istockphoto.com/id/960374702/photo/group-of-rows-of-green-stacked-biofuel-drums-in-storage-warehouse.jpg?s=612x612&w=0&k=20&c=69wSfNeG-CV8s80Ui6Vi4TPdR4gnqLyrBWur7RN0048="
                                title="data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Biodiesel
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Biodiesel is a fuel made by chemically reacting alcohol with vegetable oils, animal fats, or
                                    greases, such as recycled restaurant grease. Most biodiesel today is made from soybean oil.
                                    Biodiesel is most often blended with petroleum diesel in ratios of two percent (B2), five
                                    percent (B5), or 20 percent (B20). It can also be used as neat (pure) biodiesel (B100).
                                    Biodiesel fuels are compatible with and can be used in unmodified diesel engines with the
                                    existing fueling infrastructure. It is one of the fastest growing transportation fuels in the U.S.
                                    Biodiesel contains virtually no sulfur, so it can reduce sulfur levels in the nation’s diesel fuel
                                    supply, even compared with today’s low sulfur fuels. While removing sulfur from
                                    petroleum-based diesel results in poor lubrication, biodiesel is a superior lubricant and can
                                    reduce the friction of diesel fuel in blends of only one or two percent. This is an important
                                    characteristic because the Environmental Protection Agency now requires that sulfur levels
                                    in diesel fuel be 97 percent lower than they were prior to 20 </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1523293915678-d126868e96f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wet Waste & Sorted Municipal Waste
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Wet waste feedstocks include commercial, institutional, and residential food wastes (particularly those currently disposed of in landfills); organic-rich biosolids (i.e., treated sewage sludge from municipal wastewater); manure slurries from concentrated livestock operations; organic wastes from industrial operations; and biogas (the gaseous product of the decomposition of organic matter in the absence of oxygen) derived from any of the above feedstock streams. Transforming these “waste streams” into energy can help create additional revenue for rural economies and solve waste-disposal problems.</Typography>
                                <br></br>
                                <Typography variant="body2" color="text.secondary">MSW resources include mixed commercial and residential garbage, such as yard trimmings, paper and paperboard, plastics, rubber, leather, textiles, and food wastes. MSW for bioenergy also represents an opportunity to reduce residential and commercial waste by diverting significant volumes from landfills to the refinery. 
                                 </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />

        </div>
    )
}