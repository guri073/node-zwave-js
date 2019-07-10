import { ZWaveNode } from "../..";
import { IDriver } from "../driver/IDriver";
import { getCommandClass } from "./CommandClass";
import { CommandClasses } from "./CommandClasses";

/** The base class for all CC APIs exposed via `Node.commandClasses.<CCName>` */
export class CCAPI {
	public constructor(
		protected readonly driver: IDriver,
		protected readonly node: ZWaveNode,
	) {
		this.ccId = getCommandClass(this);
	}

	protected readonly ccId: CommandClasses;

	/**
	 * Retrieves the version of the given CommandClass this node implements
	 */
	public get version(): number {
		return this.node.getCCVersion(this.ccId);
	}

	/** Determines if this simplified API instance may be used. */
	public isSupported(): boolean {
		return (
			this.node.supportsCC(this.ccId) || this.node.controlsCC(this.ccId)
		);
	}
}

// This interface is auto-generated by maintenance/generateCCAPIInterface.ts
// Do not edit it by hand or your changes will be lost
export interface CCAPIs {
	Basic: import("./BasicCC").BasicCCAPI;
	Battery: import("./BatteryCC").BatteryCCAPI;
	Configuration: import("./ConfigurationCC").ConfigurationCCAPI;
	"Multi Command": import("./MultiCommandCC").MultiCommandCCAPI;
	"No Operation": import("./NoOperationCC").NoOperationCCAPI;
	"Thermostat Setback": import("./ThermostatSetbackCC").ThermostatSetbackCCAPI;
	Version: import("./VersionCC").VersionCCAPI;
	"Wake Up": import("./WakeUpCC").WakeUpCCAPI;
	"Z-Wave Plus Info": import("./ZWavePlusCC").ZWavePlusCCAPI;
}
