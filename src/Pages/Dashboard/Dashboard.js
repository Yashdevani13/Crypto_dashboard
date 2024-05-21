import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../componets/DashboardLayout"
import PortfolioSection from "./componets/PortfolioSection"
import PriceSection from "./componets/PriceSection"
import Transactions from "./componets/Transactions"
import InfoCart from "./componets/InfoCart"

const Dashboard = ({ }) => {
    return (
        <>
            <DashboardLayout title="Dashboard">
                <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", xl: "repeat(2,1fr)" }} gap={6}>
                    <GridItem colSpan={{
                        base:"1",
                        xl:"2",
                    }}>
                        <PortfolioSection />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <PriceSection />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Transactions />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <InfoCart
                            imgUrl="\Visual-1.svg"
                            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
                            tagText="Loans"
                            inverted={false}
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <InfoCart
                            inverted={true}
                            imgUrl="\Visual.svg"
                            text="Learn more about our real estate, mortgage, and corporate account services"
                            tagText="Contact"
                        />
                    </GridItem>
                </Grid>
            </DashboardLayout>
            
        </>
    )
}

export default Dashboard
