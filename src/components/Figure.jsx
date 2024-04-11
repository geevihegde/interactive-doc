'use client'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { Icon } from '@/components/Icon'
import p1 from '@/images/p1.png'
import p2 from '@/images/p2.png'
import p3 from '@/images/p3.png'
import p4 from '@/images/p4.png'
import p5 from '@/images/p5.png'
import p6 from '@/images/p6.png'
import p7 from '@/images/p7.png'
import p8 from '@/images/p8.png'
import p9 from '@/images/p9.png'
import p10 from '@/images/p10.jpg'
import Image from 'next/image'



export function Figure({ src, alt = '', caption, type = 'note'}) {
	const [image, setImage] = useState(null);
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	  }, []);
	useEffect(() => {
		if (src === 'p1') { setImage(p1); }
		else if (src === 'p2') { setImage(p2); }
		else if (src === 'p3') { setImage(p3); }
		else if (src === 'p4') { setImage(p4); }
		else if (src === 'p5') { setImage(p5); }
		else if (src === 'p6') { setImage(p6); }
		else if (src === 'p7') { setImage(p7); }
		else if (src === 'p8') { setImage(p8); }
		else if (src === 'p9') { setImage(p9); }
		else if (src === 'p10') { setImage(p10); }

	},[src])
	
  return (
	<Fragment>
		{!mounted && null}
		{mounted &&<figure>

			{/* eslint-disable-next-line @next/next/no-img-element */}
			{image && <Image src={image} width={"500"} height={"400"} alt={alt} />}
			<figcaption>{caption}</figcaption>
		</figure>}
	</Fragment>
	
  )
}
