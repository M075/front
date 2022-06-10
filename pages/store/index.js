import Link from "next/link";
import { useRouter } from "next/router";
import NavbarTop from "../../components/Navbar";

export default function Store({users}) {
        const router = useRouter()
        const {storeid} = router.query

	return (
		<>
			<NavbarTop />
				<h1 className='sm:text-3xl text-2xl font-medium title-font text-center mt-10 text-gray-900 mb-4'>
					Latest Products
				</h1>
				<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center mt-10 text-gray-500s'>
					See what others are selling recently
				</p>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
						{
                            users.map((user) => {
                                return (
                                    <div key={user.id}>
                                        <div className='flex flex-wrap -m-4'>
                                        <Link href = {`store/[storeid].js`} passHref>
                                            <p>{user.name}</p>
                                        </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
					</div>
				
			</section>
		</>
	)
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    return {
        props: {
            users: data
        }
    }
}
