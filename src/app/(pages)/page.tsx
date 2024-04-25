import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" w-full">
      <div className="flex items-center justify-center mt-4 h-fit">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <Card className="w-1/2" key={index}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <CardTitle>Rafael Cardoso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <span className="flex gap-2 mt-2">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className="rounded-full w-3 h-3 bg-green-500"
                          ></div>
                        ))}
                      </div>
                      <p className="text-sm font-medium">Perfeito</p>
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
  );
}
