
export const getMetaImage = (title: string) => {
  return `https://og.tailgraph.com/og
	?fontFamily=Roboto
	&title=${title}
	&titleTailwind=text-gray-800%20font-bold%20text-6xl
	&logoTailwind=h-8
	&bgTailwind=bg-white
	&footer=tailgraph.com
	&footerTailwind=text-teal-600`
}