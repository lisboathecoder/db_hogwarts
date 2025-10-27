import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.bruxo.createMany({
        data: [
             {
                name: 'Hermione Granger',
                casa: 'Gryffindor',
                patrono: 'Otter',
                varinha: 'Vine, dragon heartstring',
                anoMatricula: 1991,
                ativo: true
            },
            {
                name: 'Ron Weasley',
                casa: 'Gryffindor',
                patrono: 'Jack Russell Terrier',
                varinha: 'Willow, unicorn hair',
                anoMatricula: 1991,
                ativo: true
            },
            {
                name: 'Draco Malfoy',
                casa: 'Slytherin',
                patrono: null,
                varinha: 'Hawthorn, unicorn hair',
                anoMatricula: 1991,
                ativo: true
            },
            {
                name: 'Luna Lovegood',
                casa: 'Ravenclaw',
                patrono: 'Hare',
                varinha: 'Unknown',
                anoMatricula: 1992,
                ativo: true
            },
            {
                name: 'Cedric Diggory',
                casa: 'Hufflepuff',
                patrono: null,
                varinha: 'Ash, unicorn hair',
                anoMatricula: 1990,
                ativo: false
            }
        ],
        skipDuplicates: true
    })
}

main()
    .then(() => console.log('Seed concluído.'))
    .catch(e => {
        console.error('Erro no seed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })