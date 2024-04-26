import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const avaliacoes = [
  {
    nome: "Marcio Fernando",
    avatar: "/pessoa01.jpeg",
    numAvaliacao: 4,
    avaliacao: "Muito bom",
    descricao:
      "Gostei bastante dos produtos regionais que encontrei na loja. O atendimento também foi muito bom, com funcionários prestativos e atenciosos. Com certeza voltarei!",
  },
  {
    nome: "Pedro Almeida",
    avatar: "/pessoa03.jpeg",
    numAvaliacao: 5,
    avaliacao: "Maravilhoso",
    descricao:
      "A loja oferece uma variedade incrível de produtos regionais, todos de alta qualidade. Além disso, o ambiente é muito agradável e o atendimento impecável. Recomendo a todos!",
  },
  {
    nome: "Ana Oliveira",
    avatar: "/pessoa02.jpeg",
    numAvaliacao: 5,
    avaliacao: "Excelente",
    descricao:
      "Fiquei impressionada com a qualidade dos produtos regionais da loja. Encontrei tudo o que precisava e fui atendida com muita simpatia. Com certeza voltarei a fazer minhas compras aqui!",
  },
  {
    nome: "João Silva",
    avatar: "/pessoa06.jpeg",
    numAvaliacao: 4,
    avaliacao: "Muito bom",
    descricao:
      "Os produtos regionais da loja são realmente deliciosos. O atendimento também foi ótimo, com funcionários dispostos a ajudar. Com certeza recomendo!",
  },
  {
    nome: "João Santos",
    avatar: "/pessoa05.jpeg",
    numAvaliacao: 5,
    avaliacao: "Fantástico",
    descricao:
      "Não tenho palavras para descrever a qualidade dos produtos regionais que encontrei nessa loja. Fui atendido com muita cortesia e saí completamente satisfeito. Voltarei sempre que puder!",
  },
];

export default function Page() {
  return (
    <div className=" w-full">
      <Carousel>
        <CarouselContent className="h-[32rem]">
          <CarouselItem>
            <div className="flex items-center justify-center mt-4 h-fit">
              {" "}
              <h1 className="font-medium absolute z-30 border-2 px-24 text-[6rem] text-white">
                VER-O-PESO
              </h1>
              <Image
                src="/01_veropeso.jpg"
                className="rounded-md opacity-80"
                alt="Logo"
                width={1500}
                height={400}
              />
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="flex items-center justify-center mt-4 h-fit">
              {" "}
              <h1 className="font-medium absolute z-30 border-2 px-24 text-[6rem] text-white">
                UNAMA
              </h1>
              <Image
                src="/beth-cheirosa.jpeg"
                className="rounded-md opacity-80 h-[32rem]"
                alt="Logo"
                width={1400}
                height={100}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* em alta */}
      <div className="mt-24">
        <div>
          <h1 className="font-medium text-4xl">Em Alta</h1>
          <p className="text-lg">Produtos</p>

          <div className="flex items-center gap-4 mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card className="w-1/2" key={index}>
                <CardHeader>
                  <CardTitle>Estação das Docas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Image
                      src="/img-card.jpeg"
                      alt="card"
                      className="rounded-md"
                      width={500}
                      height={200}
                    />

                    <span className="flex gap-2 mt-2">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className="rounded-full w-3 h-3 bg-green-500"
                          ></div>
                        ))}
                      </div>
                      <p className="text-sm font-medium">5.323 avaliações</p>
                    </span>

                    <CardDescription className="mt-4">
                      A Estação das Docas é um complexo turístico, gastronômico
                      e cultural localizado em Belém, capital do estado do Pará,
                      Brasil.
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* avaliações */}
      <div className="mt-24">
        <div>
          <h1 className="font-medium text-4xl">Avaliações</h1>
          <p className="text-lg">Produtos</p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {avaliacoes.map(
            ({ avaliacao, avatar, descricao, nome, numAvaliacao }, index) => (
              <Card className="w-1/2" key={index}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={avatar}
                    alt="imagem"
                    width={48}
                    height={48}
                  />
                  <CardTitle>{nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <span className="flex gap-2 mt-2">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: numAvaliacao }).map(
                          (_, index) => (
                            <div
                              key={index}
                              className="rounded-full w-3 h-3 bg-green-500"
                            ></div>
                          )
                        )}
                      </div>
                      <p className="text-sm font-medium">{avaliacao}</p>
                    </span>

                    <CardDescription className="mt-4">
                      {descricao}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}
