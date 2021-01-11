import { Monsters } from 'oldschooljs';
import LootTable from 'oldschooljs/dist/structures/LootTable';

import setCustomMonster from '../../../../util/setCustomMonster';

export const KingGoldemarLootTable = new LootTable()
	.tertiary(2300, 'Dwarven warhammer')
	.tertiary(20, 'Clue scroll (master)')
	.oneIn(
		30,
		new LootTable()
			.add('Dwarven crate')
			.add('Dwarven ore')
			.add('Coal', [2, 14])
			.add('Iron ore', [2, 14])
			.add('Royal crown')
			.add('Mystic jewel')
			.add('Dwarven lore')
			.add('Golden goblin')
			.add('Gold candlesticks')
	)
	.every('Bones')
	.add('Beer', [1, 4])
	.add('Kebab', [1, 4])
	.add('Hammer', 1)
	.add('Oily cloth')
	.add('Axe head')
	.add('Pickaxe handle')
	.add('Hair')
	.add('Gold bar')
	.add('Gold ring', 2)
	.add('Dwarven helmet', 2)
	.add('Jewellery')
	.add('Dwarven stout(m)', 2)
	.add('Gold ore', [2, 20], 2)
	.add('Coins', [50_000, 1_000_000])
	.add('Skull piece')
	.add('Dwarven rock cake')
	.add('Dwarven stout')
	.add('Clue scroll grandmaster');

setCustomMonster(696969, 'King Goldemar', KingGoldemarLootTable, Monsters.GeneralGraardor, {
	id: 696969,
	name: 'King Goldemar',
	aliases: ['king goldemar', 'dwarf king', 'goldemar']
});

const KingGoldemar = Monsters.find(mon => mon.name === 'King Goldemar')!;

export default KingGoldemar;