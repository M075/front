import Link from 'next/link'
import Image from 'next/image'

export default function SingleProduct({ product }) {
	return (
		<div className='lg:w-1/4 md:w-1/2 p-4 w-full shadow hover:shadow-xl cursor-pointer'>
			<Link href={`/store/${product.id}`}>
				<div
					className='block relative h-48 rounded overflow-hidden'
					key={product.id}
				>
					<a className='text-white title-font text-lg font-medium'>
						<Image
							alt='ecommerce'
							className='object-cover object-center w-full h-full block'
                            src={product.pictureUrl}
                            width={320} height={240}
						/>
					</a>
				</div>
			</Link>
			<div className='mt-4'>
				<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
					{product.category}
				</h3>
				{product.title}
				<p className='mt-1'>{product.price}</p>
				<p className='mt-1'>{product.description.substring(0, 100)}...</p>
			</div>
		</div>
	)
}
