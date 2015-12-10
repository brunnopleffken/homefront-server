/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

interface IFleet {
	fleetId: number;
	atf: number;
	sco: number;
	fri: number;
	des: number;
	cru: number;
	bcr: number;
	war: number;
	dre: number;
	edr: number;
}

export default class Military {
	private attackerFleet: Array<IFleet> = [];
	private defenderFleet: Array<IFleet> = [];

	/**
	 * Set attacker fleet
	 */
	public setAttacker(fleets: Array<IFleet>): void {
		this.attackerFleet = fleets;
	}

	/**
	 * Set defender fleet
	 */
	public setDefender(fleets: Array<IFleet>): void {
		this.defenderFleet = fleets;
	}

	/**
	 * Return attacker or defender fleet
	 */
	public returnFleet(type: string): Array<IFleet> {
		if(type == "attacker") {
			return this.attackerFleet;
		}
		else {
			return this.defenderFleet;
		}
	}
}
