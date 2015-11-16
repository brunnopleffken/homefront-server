/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

export default class Navigation {
	/**
	 * Returns the length of the hypotenuse of two points
	 */
	public static distance(posX: number, posY: number): number {
		return Math.sqrt(posX * posX + posY * posY);
	}
}
