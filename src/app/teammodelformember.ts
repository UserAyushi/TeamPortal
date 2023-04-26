export class TEAMDATA {

    id: string | null | undefined
    fName: string | null | undefined
    lName: string | null | undefined
    teams: TEAM[]

}
export class TEAM {
    teamId: string | null | undefined
    teamName: string | null | undefined
    teamMemberIds: string | null | undefined
}