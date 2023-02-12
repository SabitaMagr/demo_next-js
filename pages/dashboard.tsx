import Container from "@/Components/Container"
import Mainlayout from "@/layouts/Mainlayout"

const breadCrumb:{title:string,link:string}[]=[
  {
    title:'Home',
    link:'#'
  },
  {
    title:'Dashboard',
    link:'#'
  },
]

const dashboard=()=>{
    return (
        <div>
            <Mainlayout
              title={'Dashboard'}
            >
              <Container 
              breadCrumb={breadCrumb}
              title={'Dashboard'}
              >
              </Container>
              {/* <div>
                this is dashboard
              </div> */}

            </Mainlayout>
        </div>
    )
}

export default dashboard